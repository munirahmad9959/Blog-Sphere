export const metadata = {
    title: "Blog Sphere",
    description: "Blog Sphere is a platform for sharing and exploring diverse stories. Join a community of writers and creators, empowered by intuitive tools and a supportive environment.",
};



// pages/about/layout.js

export default function AboutLayout({ children }) {
    return (
        <div style={{
            backgroundColor: '#242424',
            minHeight: '100vh',
            color: "white",
            fontFamily: "CustomFont",
            maxWidth: "100vw"
        }}>
            {children}
        </div>
    );
}
