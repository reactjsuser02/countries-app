import '../App.css';
import React, { useState } from 'react';

import Card from './Card';

import darkMode from '../icons/darkMode.svg';
import searchIcon from '../icons/search.svg';

function Main(props) {

function setCountry(country) {
    props.setCountry(country)
}

function handleChange(event) {
    const target = event.target
    console.log(target.value)
    props.findCountry(target.value.toLowerCase())
}
function handleFilterChange(event) {
    console.log(event.target.value)
    props.filterCountries(event.target.value)
}


return (
    <div className='main px-20 py-10'>
        <div className='relative'>
            <input
            className='w-4/12 py-2 pl-16 pr-2 shadow-[0_0_8px_1px_rgba(0,0,0,0.1)]'
            type="text"
            placeholder='Search for a country...'
            onChange={handleChange}
            />
            <img className='absolute w-5 top-1/4 left-8' src={searchIcon} alt="" />
            <select className='w-2/12 py-2 px-5 shadow-[0_0_8px_1px_rgba(0,0,0,0.1)] float-right' name="" id="" onChange={handleFilterChange}>
                <option value="all" hidden default>Filter by Region</option>
                <option value="all">All countries</option>
                <option value="africa">Africa</option>
                <option value="americas">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
        <div className='grid grid-cols-4 gap-12 pt-10'>
            {
                props.countries.map(country => {
                    return (
                        <Card
                        data={country}
                        setCountry={setCountry}
                        />
                    )
                })
            }
        </div>
    </div>
);
}

export default Main;


