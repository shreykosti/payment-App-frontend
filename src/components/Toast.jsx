import { ToastContainer } from "react-toastify";
export function Toast() {
  return (
    <>
      <ToastContainer
        theme="dark"
        autoClose={3000}
        closeOnClick
        transition:Slide
        pauseOnFocusLoss={false}
        newestOnTop
        draggable
      />
    </>
  );
}
