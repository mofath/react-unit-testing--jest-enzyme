import React, { useState, useEffect } from 'react'
import Dropdown from './dropdown'
import InputText from './input-text';
import API_Data from '../api.json';

export default function BuyCarForm() {
  const [SelectedBrand, setSelectedBrand] = useState('');
  const [SelectedModel, setSelectedModel] = useState('');
  const [Keywords, setKeywords] = useState('');
  const [Brands, setBrands] = useState([]);
  const [Models, setModels] = useState([]);

  useEffect(() => {
    setBrands(() => API_Data.brands.map(brand => ({
      value: brand.toLowerCase(),
      label: brand
    })));
  }, []);

  const onBrandChange = (brand) => {
    setSelectedBrand(brand);
    setSelectedModel('');
    setModels(() => API_Data.models[brand].map(brand => ({
      value: brand.toLowerCase(),
      label: brand
    })))
  };


  const onModelChange = (model) => {
    setSelectedModel(model);
  }

  const onKeywordsChange = (keywords) => {
    setKeywords(keywords);
    alert(keywords)
  }

  const resetSearch = () => {
    setSelectedBrand('');
    setSelectedModel('');
    setKeywords('');
    setModels([])
  }

  return (
    <div className="card BuyCarForm">
      <div className="card-header">
        <strong>Buy a car</strong>
        <button className="btn btn-sm btn-link float-right" onClick={resetSearch}>reset</button>
      </div>
      <div className="card-body">
        <Dropdown
          label="Brand"
          testHook="S1"
          placeholder="- All Brands -"
          selectedOption={SelectedBrand}
          onChange={onBrandChange}
          options={Brands}
        />
        <Dropdown
          label="Model"
          testHook="S2"
          placeholder="- select a brand first -"
          selectedOption={SelectedModel}
          onChange={onModelChange}
          options={Models}
        />
        <InputText
          label="Keywords"
          testHook="T"
          value={Keywords}
          onChange={onKeywordsChange}
        />
      </div>
      <div className="card-footer">
        <button
          className="btn btn-primary btn-block"
          id="btn"
          disabled={!SelectedBrand && !SelectedModel && !Keywords}
        >
          Search Cars
        </button>
      </div>
    </div>
  );
};
