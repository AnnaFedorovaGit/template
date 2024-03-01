import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './components/App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <BrowserRouter basename='/management-tool'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// const root = document.getElementById("root")
// ReactDOM.createRoot(root).render(
//     <BrowserRouter basename='/contact-list'>
//         <Provider store={store}>
//             <PersistGate loading={null} persistor={persistor}>
//                 <App />
//                 <ToastContainer
//                     position="top-right"
//                     autoClose={5000}
//                     limit={4}
//                     hideProgressBar={false}
//                     newestOnTop={false}
//                     closeOnClick
//                     rtl={false}
//                     pauseOnFocusLoss
//                     draggable={false}
//                     pauseOnHover
//                     theme="dark"
//                     transition={Slide}
//                 />
//             </PersistGate>
//         </Provider >
//     </BrowserRouter>
// );