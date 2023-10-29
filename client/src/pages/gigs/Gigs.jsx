import React, { useRef, useEffect} from 'react'
import "./Gigs.scss"
import { KeyboardArrowDown, Sort } from '@mui/icons-material';
import { useState } from 'react';
import GigCard from '../../components/gigCard/GigCard';
import newRequest from '../../utils/newRequest';
import { useQuery } from "@tanstack/react-query";
import { useLocation } from 'react-router-dom';

const Gigs = () => {

  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const {search} = useLocation()

  // console.log(location);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['gigs'],
    queryFn: () =>
      newRequest
      .get(`/gigs`,{
        params: {
          search: search,
          min: minRef.current.value,
          max: maxRef.current.value,
          sort: sort
        },
      })
      .then((res) => {
        return res.data;

      }),
  });

  console.log(data);

  const reSort = (type) => {
    setSort(type)
    setOpen(false)
  }

  useEffect(() => {
    refetch();
  }, [sort]);


  const apply = () => {
    refetch()

  }

  return (
    <div className='gigs'>
      <div className="container">
        <span className="breadcrumbs">WORKFLEX GRAPHICS & DESING</span>
        <h1>AI Artists</h1>
        <p>Explore the boundries of art and technology with Workflex AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budged</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy</span>
            <span className="sortType">{sort === "sales" ? "Best Selling" : "Newest"}</span>
            <KeyboardArrowDown fontSize='medium' className='down' onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightmenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {isLoading
           ? "loading"
           :error
           ? "something went wrong!"
           : data.map((gig) => <GigCard key={gig._id} item={gig} /> )}
        </div>
      </div>
    </div>
  )
}

export default Gigs