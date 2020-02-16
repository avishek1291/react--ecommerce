import React from 'react';
import FilterBar from "../../containers/FilterBar/FilterBar";
import ProductList from "../../containers/ProductList/ProductList";
import Pagination from "../../components/Pagination/Pagination";

const Home = () => {
    const custom = {
      
    }
    return (
        <React.Fragment>
            <div className="container bg-dark custom" style={{paddingTop: '6rem'}} >
                <div className="row">
                    <FilterBar style={"backgroung: transparent"}/>
                    <ProductList/>
                </div>
            </div>
        </React.Fragment>
    );
};


export default Home;
