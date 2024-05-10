import './about.css'

export default function About({ show, onClose }) {
  return (
    <>
      {show && (
        <div className="overlay" onClick={onClose}>
          <div className="about">
            <a href="https://www.instagram.com/rickerfmann/">@rickerfmann</a>
            <a href="mailto:rickerfmannphoto@gmail.com">rickerfmannphoto@gmail.com</a>
            <p className="close-btn">close</p>
          </div>
        </div>
      )}
    </>
  )
}
