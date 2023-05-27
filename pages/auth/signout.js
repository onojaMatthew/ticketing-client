import { useEffect } from "react";
import Router from "next/router";
import useRequest from "../../hooks/request-hook";

export default () => {
  const { doRequest } = useRequest({
    url: "/api/users/signout",
    method: "post",
    body: {},
    onSuccess: () => Router.push("/")
  });

  useEffect(() => {
    doRequest();
  }, [])
  return <div>
    <h2>Signing you out...</h2>
  </div>
}