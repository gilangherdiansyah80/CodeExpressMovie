import { useEffect, useState } from "react"
import { getApiMovie, searchMovie } from "./services/api"

const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getApiMovie().then((data) => {
      setMovies(data)
    })
  }, [])

  const searchMovies = (e) => {
    e.preventDefault()
    const title = e.target.value
    searchMovie(title).then((data) => {
      setMovies(data.results)
    })
  }

  console.log(movies)
  return (
    <div className="text-white">
      <header className="bg-baseColor1 p-3 flex justify-center">
        <div className="flex justify-between items-center h-20 lg:w-3/5">
          <div className="w-32">
            <img src="/images/logo.png" alt="CodeExpress" />
          </div>
          <input type="text" className="border border-baseColor3 rounded p-2 text-black lg:w-96" onChange={searchMovies}  placeholder="Search Your Movie" />
        </div>
      </header>

      <main className="bg-baseColor4 flex justify-center">
        <section className="p-3 flex justify-center items-center w-full flex-col md:grid md:grid-cols-2 md:gap-3 lg:grid-cols-4 gap-y-3 lg:w-3/5">
          {movies.map((movie) => (
            <div className="bg-baseColor3 p-3 rounded-xl flex flex-col gap-y-3" key={movie.id}>
              <h1 className="text-center bg-baseColor2 rounded-md p-3">{movie.original_title}</h1>
              <img src={`${import.meta.env.VITE_BASEIMAGEURL}/${movie.poster_path}`} alt={movie.original_title} className="w-full rounded-md" />
              <p>{movie.overview.substring(0, 156)} ....</p>
              <div className="flex justify-between">
                <p>{movie.release_date}</p>
                <div className="flex gap-x-3 items-center">
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <p>{movie.vote_average}</p>
                </div>
              </div>
              <button className="bg-baseColor2 p-3 rounded-md">Learn More</button>
            </div>
          ))}
        </section>
      </main>

      <footer className="bg-baseColor1 h-20 p-3 text-sm flex justify-center items-center">
        <h1>© Copyright 2024. All Rights Reserved by CodeExpress</h1>
      </footer>
    </div>
  )
}

export default App
