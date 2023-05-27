import React, { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/request-hook";

export default () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const { doRequest, errors } = useRequest({ 
    url: "/api/users/signup", 
    method: "post", 
    body: {email, password }, 
    onSuccess: () => Router.push("/")
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await doRequest();
  }

  return <form onSubmit={handleSubmit}>
    <h1>Sign Up</h1>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input onChange={e => setEmail(e.target.value)} id="email" className="form-control" />
    </div>
    <div className="form-group mt-4">
      <label htmlFor="password">Password</label>
      <input onChange={e => setPassword(e.target.value)} type="password" id="password" className="form-control" />
    </div>
    {errors}
    <div className="form-group mt-4">
      <button className="btn btn-primary">Sign Up</button>
    </div>
  </form>
}