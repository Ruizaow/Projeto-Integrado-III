import React, { useEffect, useState } from "react";

// Importações de estilo e componentes
import "./styles/Pasta.css";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import Post from "./Post.jsx";

function Pasta() {
  const [savedPosts, setSavedPosts] = useState([]);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("pasta");
    if (stored) {
      setSavedPosts(JSON.parse(stored));
    }
  }, []);

  const handleSidebarToggle = () => {
   if(!savedPosts.some((p) => p.id === post.id)){
    const updatedPosts = [...savedPosts, post];
    setSavedPosts(updatedPosts);
    localStorage.setItem("pasta", JSON.stringify(updatedPosts));
   }
  }
  return (
    <div className="container">
      <div className="visible-navbar">
        <Navbar />
      </div>
      <div className="occult-navbar">
        <Navbar />
      </div>

      <div className="page-info">
        {/* Sidebar lateral */}
        <div className="sidebar-component">
          <Sidebar
            isCollapsed={isSidebarCollapsed}
            setIsCollapsed={setIsSidebarCollapsed}
          />
        </div>
        <div
          className={`pasta-feed ${
            isSidebarCollapsed ? "collapsed" : "expanded"
          }`}
        >
          <h1 className="pasta-title">SALVOS</h1>

          {savedPosts.length > 0 ? (
            <div className="pasta-content-box">
              <div className="saved-posts-grid">
                {savedPosts.map((post) => (
                  <Post
                    key={post.id}
                    username="username"
                    timestamp={new Date(post.timestamp).toLocaleString()}
                    name={post.name}
                    age={post.age}
                    breed={post.breed}
                    sex={post.sex}
                    owner={post.owner}
                    date={post.date}
                    tag={post.tag}
                    extraDescription={post.extra}
                    imageUrl={post.image}
                    onSavePost={() => handleSavePost(post)}
                    onSharePost={() => {}}
                    onMapClick={() => alert(`Abrir mapa em: ${post.location}`)}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="no-posts-message">
              <p>Você ainda não salvou nenhuma publicação.</p>
              <span>
                Que tal explorar o feed e salvar os posts que mais gostar?
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Pasta;
