import Link from 'next/link';
import './notFound.scss';

const NotFound = () => {
    return ( 
        <main className="error-page">
        <div className="container">
          <div className="eyes">
            <div className="eye">
              <div className="eye__pupil eye__pupil--left"></div>
            </div>
            <div className="eye">
              <div className="eye__pupil eye__pupil--right"></div>
            </div>
          </div>
      
          <div className="error-page__heading">
            <h1 className="error-page__heading-title">Looks like you're lost</h1>
            <p className="error-page__heading-desciption">404 error</p>
          </div>

          <Link className="error-page__button" href="/">back to home</Link>
        </div>
      </main>
     );
}
 
export default NotFound;