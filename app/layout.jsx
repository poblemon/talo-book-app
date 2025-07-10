import '../styles/globals.css';

export const metadata = {
  title: 'Sube tu foto de boda',
  description: 'Aplicación para subir fotos de boda con Uploadcare y Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
