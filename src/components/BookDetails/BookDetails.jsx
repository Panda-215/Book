import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const URL = "https://openlibrary.org/works/";

const BookDetailsWrapper = styled.section`
  padding: 6rem 0;

  .back-btn {
    margin-left: 20px;
    margin-bottom: 2.6rem;
    transition: var(--transition);
    &:hover {
      color: var(--purple-color);
    }
    span {
      margin-left: 1rem;
    }
  }

  .book-details-content {
    gap: 4rem;
  }

  .book-details-img {
    max-height: 600px;
    overflow: hidden;
    img {
      margin: 0 auto;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .book-details-item {
    margin-bottom: 1.4rem;
    &.description {
      opacity: 0.8;
    }
  }

  .book-details-info {
    overflow-y: scroll;
    max-height: 600px;
    padding: 1.4rem;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 8px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--purple-color);
      outline: -1px solid slategray;
      border-radius: 8px;
    }
  }

  @media screen and (min-width: 768px) {
    .book-details-content {
      grid-template-columns: 40% 60%;
      gap: 0;
    }
    .book-details-img {
      padding: 0 6rem 0 2rem;
    }
    .book-details-img img {
      max-width: 100%;
    }
  }
`;

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        if (data) {
          const { description, title, covers, subject_places, subject_times, subjects } = data;
          const newBook = {
            description: description ? description.value : "No description found",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
            subject_times: subject_times ? subject_times.join(", ") : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found"
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <BookDetailsWrapper>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>

        <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src={book?.cover_img} alt="cover img" />
          </div>
          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{book?.title}</span>
            </div>
            <div className='book-details-item description'>
              <span>{book?.description}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Subject Places: </span>
              <span className='text-italic'>{book?.subject_places}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Subject Times: </span>
              <span className='text-italic'>{book?.subject_times}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Subjects: </span>
              <span>{book?.subjects}</span>
            </div>
          </div>
        </div>
      </div>
    </BookDetailsWrapper>
  )
}

export default BookDetails;
