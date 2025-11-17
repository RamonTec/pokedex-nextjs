import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Demostración de Optimización de Imágenes en Next.js</title>
        <meta name="description" content="Aprende cómo optimizar imágenes en Next.js" />
      </Head>
      
      <div className="min-h-screen  py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Optimización de Imágenes en Next.js
            </h1>
            <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          </header>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-16 transition-all duration-300 hover:shadow-2xl">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex justify-center items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 md:w-56 md:h-56 flex items-center justify-center dark:bg-gray-700">
                    <span className="text-gray-500 dark:text-gray-400 text-center px-2">
                      Componente Image de Next.js
                    </span>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    Carga Optimizada de Imágenes
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Next.js proporciona el componente <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-indigo-600 dark:text-indigo-400">Image</code> que ofrece muchos beneficios:
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Optimización automática de imágenes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Carga diferida (lazy loading) para un mejor rendimiento</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Soporte para formatos modernos (WebP, AVIF)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Dimensionamiento de imagen responsivo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-16 transition-all duration-300 hover:shadow-2xl">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Consideraciones de Rendimiento
              </h2>
              
              <div className="prose prose-indigo dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Podemos verificar esto al momento de usar el componente Image, en la consola del navegador en el apartado de network, veremos como se envia una request
                  para optimizar la imagen, ahora, que pasaria si, tenemos un listado mostrando cientos de productos? Por cada imagen se enviara una peticion para
                  optimizar la imagen.
                  Al implementar soluciones de carga de imágenes, debemos considerar los posibles impactos en el rendimiento:
                </p>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 mb-6 rounded">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700 dark:text-yellow-300">
                        <strong>Importante:</strong> Si estás utilizando una CDN que ya optimiza las imágenes, configura Next.js para usar un cargador personalizado y así evitar la doble optimización y costos innecesarios del servidor.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="font-bold text-lg text-blue-800 dark:text-blue-200 mb-2">Mejores Prácticas</h3>
                    <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Usa tamaños de imagen apropiados para cada punto de interrupción</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Implementa la carga diferida para imágenes fuera de la pantalla</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Elige el formato de imagen correcto (WebP, AVIF)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h3 className="font-bold text-lg text-purple-800 dark:text-purple-200 mb-2">Consejos de Rendimiento</h3>
                    <ul className="space-y-2 text-purple-700 dark:text-purple-300">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Prioriza las imágenes críticas en la parte visible de la página</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Usa cargadores de esqueleto para una mejor percepción del rendimiento</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Monitorea el rendimiento de carga de imágenes con herramientas como Lighthouse</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Explora Diferentes Enfoques
            </h2>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/pokedex-v1" passHref>
                <div className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Pokedex V1
                </div>
              </Link>
              
            </div>
          </div>

          <footer className="text-center text-gray-600 dark:text-gray-400 text-sm pt-8 border-t border-gray-200 dark:border-gray-700">
            <p>Demostración de Optimización de Imágenes en Next.js • {new Date().getFullYear()}</p>
          </footer>
        </div>
      </div>
    </>
  );
}
