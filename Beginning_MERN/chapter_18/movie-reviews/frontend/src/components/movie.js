import React, { useState, useEffect } from 'react';
import MovieDataService from '../services/movies';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


const Movie = props => {
    const  { id } = useParams ();
    const [movie, setMovie] = useState({
        id: null,
        title: "",
        rated: "",
        reviews: []
    })
    const getMovie = id => {
        MovieDataService.get(id)
            .then(response => {
                setMovie(response.data)
                console.log(response.data)
            })
            .catch(e => {
                console.log(e)
            })
    }
    useEffect(() => {
        getMovie(id);
    }, [id]);
    
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Image src={movie.poster + "/100px250"} fluid />
                    </Col>
                    <Col>
                        <Card>
                            <Card.Header as="h5">{movie.title}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {movie.plot}
                                </Card.Text>
                                {props.user &&
                                    <Link to={"/movies/" + props.match.params.id + "/review"}>
                                        Add Review
                                    </Link>}
                            </Card.Body>
                        </Card>
                        <br></br>
                        <h2>Reviews</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Movie;


// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import MovieDataService from '../services/movies';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Spinner from 'react-bootstrap/Spinner';
// import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';

// const Movie = (props) => {
//   const { id } = useParams(); // Extract the id from the URL
//   const [movie, setMovie] = useState({
//     id: null,
//     title: '',
//     rated: '',
//     plot: '',
//     poster: '',
//     reviews: [],
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const getMovie = (id) => {
//     setLoading(true);
//     MovieDataService.get(id)
//       .then((response) => {
//         setMovie(response.data);
//         setLoading(false);
//       })
//       .catch((e) => {
//         console.error(e);
//         setError('Failed to fetch movie details');
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     getMovie(id); // Fetch movie details using the id from the URL
//   }, [id]);

//   if (loading) {
//     return (
//       <Container className="text-center mt-5">
//         <Spinner animation="border" />
//         <p>Loading...</p>
//       </Container>
//     );
//   }

//   if (error) {
//     return (
//       <Container className="text-center mt-5">
//         <Alert variant="danger">{error}</Alert>
//       </Container>
//     );
//   }

//   return (
//     <div>
//       <Container>
//         <Row>
//           <Col>
//             {movie.poster ? (
//               <Image src={movie.poster} fluid />
//             ) : (
//               <Image src="/default-poster.png" fluid />
//             )}
//           </Col>
//           <Col>
//             <Card>
//               <Card.Header as="h5">{movie.title}</Card.Header>
//               <Card.Body>
//                 <Card.Text>{movie.plot}</Card.Text>
//                 {props.user && (
//                   <Link to={`/movies/${id}/review`}>
//                     <Button variant="primary">Add Review</Button>
//                   </Link>
//                 )}
//               </Card.Body>
//             </Card>
//             <br />
//             <h2>Reviews</h2>
//             {movie.reviews.length ? (
//               movie.reviews.map((review, index) => (
//                 <Card key={index} className="mb-2">
//                   <Card.Body>{review.text}</Card.Body>
//                 </Card>
//               ))
//             ) : (
//               <p>No reviews yet.</p>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Movie;
