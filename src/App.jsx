import './App.css';
import React, { useState } from 'react';

import Main from './Components/Main';
import SingleCountry from './Components/SingleCountry';
import array from './data.json';

import darkMode from './icons/darkMode.svg';
import searchIcon from './icons/search.svg';


function App() {

    const [currentCountry, setCurrentCountry] = useState(null)
    const [filter, setFilter] = useState(array)
    const [countries, setCountries] = useState(filter)
    

function setCountry(country) {
    if(country === 'back') {
        setCurrentCountry(null)
        return
    }
    setCurrentCountry(country)
}

let isBroken = false
function findCountryByCioc(cioc) {
    array.map(country => {
        if(isBroken) return
        if(country.cioc === cioc) {
            isBroken = true
            setCurrentCountry(country)
        }
    })
}
function findCountry(searchTerm) {
    console.log(searchTerm)
    if(searchTerm === '') {
        filterCountries('all')
        return
    }
    let newArray = []
    filter.map(country => {
        if(!country.name) {
            return
        }
        if(!country.capital) {
            return
        }
        if(country.name.toLowerCase().includes(searchTerm) || country.capital.toLowerCase().includes(searchTerm)) {
            newArray.push(country)
        } else {
            return
        }
    })
    console.log('newArray')
    console.log(newArray)
    setCountries(newArray)
}
function filterCountries(option) {
    console.log(option)
    if(option === 'all') {
        setFilter(array)
        setCountries(array)
        return
    }
    let newArray = []
    array.map(country => {
        if(country.region.toLowerCase() === option) {
            newArray.push(country)
        } else {
            return
        }
    })
    setFilter(newArray)
    setCountries(newArray)
}

    if(!currentCountry) {
        return (
            <div className="App w-full h-full overflow-auto">
                <div className='border-b px-20 py-5'>
                    <h2 className='inline font-semibold text-2xl'>Where in the world?</h2>
                    <div className='float-right'>
                        <img className='w-5 inline' src={darkMode} alt="" />
                        <span>Dark Mode</span>
                    </div>
                </div>
                <Main
                setCountry={setCountry}
                filterCountries={filterCountries}
                findCountry={findCountry}
                countries={countries}
                />
            </div>
        )
    } else {
        return (
            <div className="App w-full h-full overflow-auto">
                <div className='border-b px-20 py-5'>
                    <h2 className='inline font-semibold text-2xl'>Where in the world?</h2>
                    <div className='float-right'>
                        <img className='w-5 inline' src={darkMode} alt="" />
                        <span>Dark Mode</span>
                    </div>
                </div>
                <SingleCountry
                data={currentCountry}
                setCountry={setCountry}
                findCountryByCioc={findCountryByCioc}
                />
            </div>
        )
    }
}

export default App;
