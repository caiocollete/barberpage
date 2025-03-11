export default function Footer(){
    return(
        <footer className="bg-[#0d0d0d] text-white py-4">
            <div className="container mx-auto px-4">
                <p className="text-center">
                    &copy; {new Date().getFullYear()} Barberia Guimarães. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}