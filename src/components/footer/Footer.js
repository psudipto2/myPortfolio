

export const Footer = () => {
    return (
    <footer class="text-center text-lg-start bg-light text-muted">
        <div class="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}} >
            © {(new Date()).getFullYear()} Copyright:
            <a class="text-reset fw-bold" target="blank" href="https://github.com/psudipto2/">Sudipta Paul</a>
        </div>
    </footer>
    );
}