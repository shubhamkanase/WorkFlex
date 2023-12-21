import React, { useRef, useEffect } from 'react'
import "./Gigs.scss"
import { Category, KeyboardArrowDown, Sort } from '@mui/icons-material';
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

  const { search } = useLocation()
  const params = new URLSearchParams(search);
  const category = params.get('cat');

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['gigs'],
    queryFn: () =>
      newRequest
        .get(`/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`, {})
        .then((res) => {
          console.log(res.data)
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
  
  useEffect(() => {
    refetch();
  }, [search]);

  const apply = () => {
    refetch()

  }
  let title = '';
let subtitle = '';

// Set title and subtitle based on the category
if (category === 'design') {
  title = 'Graphics & Design';
  subtitle = 'Explore the boundaries of graphics and design with Workflex.';
} else if (category === 'animation') {
  title = 'Animation';
  subtitle = 'Discover the world of animated creations with our talented artists.';
} else if (category === 'translation') {
  title = 'Writing & Translation';
  subtitle = 'Express your ideas through our language experts and skilled writers.';
} else if (category === 'ai') {
  title = 'AI Services';
  subtitle = 'Unlock the potential of Artificial Intelligence with our comprehensive services.';
} else if (category === 'digimarketing') {
  title = 'Digital & Marketing';
  subtitle = 'Elevate your brand with our digital marketing strategies and solutions.';
} else if (category === 'music') {
  title = 'Music & Audio';
  subtitle = 'Create memorable sounds and compositions with our music experts.';
} else if (category === 'technology') {
  title = 'Programming & Tech';
  subtitle = 'Explore the tech world with our skilled programmers and tech enthusiasts.';
} else if (category === 'business') {
  title = 'Business';
  subtitle = 'Grow and manage your business efficiently with our expert guidance.';
} else if (category === 'lifestyle') {
  title = 'Lifestyle';
  subtitle = 'Enhance your lifestyle with our specialized services.';
}
  // GRAPHICS & DESING
  // AI Artists
  // Explore the boundries of art and technology with Workflex AI artists
  return (
    <div className='gigs'>
      <div className="container">
        <span className="breadcrumbs">WORKFLEX {category.toUpperCase()} </span>
        <h1>{title}</h1>
        <p>{subtitle}
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
            : error
              ? "something went wrong!"
              : data.map((gig) => <GigCard key={gig._id} item={gig} />)}
        </div>
      </div>
    </div>
  )
}

export default Gigs