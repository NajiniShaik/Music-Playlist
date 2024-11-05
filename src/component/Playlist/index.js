import {FiTrash} from 'react-icons/fi'

import './index.css'

const Playlist = props => {
  const {playlistDetails, onDeletePlaylist} = props
  const {id, imageUrl, name, genre, duration} = playlistDetails

  const onclickDelete = () => {
    onDeletePlaylist(id)
  }

  return (
    <li className="track-container">
      <div className="track-detailed-card">
        <img src={imageUrl} alt="track" className="track-img" />
        <div>
          <p className="track-title">{name}</p>
          <p className="track-genre">{genre}</p>
        </div>
      </div>
      <div className="card">
        <p className="duration">{duration}</p>
        <button
          className="delete-btn"
          type="button"
          onClick={onclickDelete}
          data-testid="delete"
        >
          <FiTrash className="delete-icon" />
        </button>
      </div>
    </li>
  )
}

export default Playlist
