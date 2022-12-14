import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '../contexto/context-provider';
import { ContainerFav } from './container-fav';

const objMoviesContext = {
  moviesFav: [
    {
      id: 1,
      idmovie: 597208,
      nickname: 'jesusrodriguezgonzalezgr',
      original_title: 'Nightmare Alley',
      poster_path: '/680klE0dIreQQOyWKFgNnCAJtws.jpg',
      runtime: 150,
      user_average: 1,
      vote_average: 7.2,
    },
  ],
};

describe('first', () => {
  test('should render the component FavoriteMovie', () => {
    render(
      <BrowserRouter>
        <Context.Provider value={objMoviesContext}>
          <ContainerFav />
        </Context.Provider>
      </BrowserRouter>
    );
    expect(screen.getByText(/Favorite Movies/i)).toBeInTheDocument();
  });
});
