import React from 'react';
// import Potato from './Potato'; // 경로에서 >>>>> ./ <<<<< 는 같은 directory를 의미
import PropTypes from "prop-types";

function Food({  name, picture, rating  }) {
  // console.log(props.fav);
  return (
    <div>
      <h1>I like {name}</h1>
      <h2>{rating}/5.0</h2>
      <img src={picture} alt={name} />
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired //isRequired가 없으면 Food JSX에 rating property가 없어도 오류를 안띄움
};
//property는 app에 작성되는 JSX 안에 데이터 전달 때 쓰는 애니까 JSX에 쓰인 property를 체크하는 데에 사용되겠지!


//<    />   :: JSX
// fav . . .  :: Props

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 3.8
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 3
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.5
  }
];
// App 에서 Food로 데이터 넘겨주는 것 ! ( Parent  ->  Children )

// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.picture} />
// }

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
          key={dish.id} 
          name={dish.name} 
          picture={dish.image} 
          rating={dish.rating} 
        />)
      )}
    </div>
  );
}
// !!! key={...} :: 이 "key prop"은 child component로 전달되지 않아! (Child Component에 key가 없기 때문!)
//                  <Warning: Each child in a list should have a unique "key" prop.>
//                  콘솔 창의 위 오류/경고에 대응하기 위한 key property


export default App;
