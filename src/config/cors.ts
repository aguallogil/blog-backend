import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";

export const CORS: CorsOptions = {
    origin: true, // Puedes cambiar esto según tus necesidades, por ejemplo: 'http://localhost:3000'
    methods: 'GET,HEAD,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Authorization, Content-Type', // Agrega Authorization a las cabeceras permitidas
  };