import React from 'react';
import NavBar from '../Components/NavBar';
import Login from '../Components/Login';
import Footer from '../Components/Footer';
import IIndHalf from '../Components/IIndHalf';

function SignInpage() {
  return (
    <div className='bg-[url("https://static.vecteezy.com/system/resources/previews/008/079/335/non_2x/empty-showcase-abstract-pastel-color-background-3d-illustration-free-vector.jpg")]'>
      <NavBar />
      <div className='flex flex-col-reverse md:flex-row'>
        <Login />
        <IIndHalf />
      </div>
      <Footer />
    </div>
  );
}

export default SignInpage;
