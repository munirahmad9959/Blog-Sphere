export const metadata = {
    title: "Blog Sphere Membership",
    description: "Unlock exclusive access to premium content, personalized recommendations, and a vibrant community of writers and readers. Become a member of Blog Sphere today and elevate your storytelling experience.",
};


// pages/about/layout.js

export default function AboutLayout({ children }) {
    return (
        <div style={{
            minHeight: '100vh',
            fontFamily: "CustomFont",
            maxWidth: "100vw",
            backgroundColor: "white",
        }}>
            {children}
        </div>
    );
}
