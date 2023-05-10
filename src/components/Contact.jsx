import React from "react";
import styled from "styled-components";
import { useState } from "react";



const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [correoEnviado, setCorreoEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Enviar solicitud POST al servidor Node.js
    try {
      const response = await fetch("https://wedev-backend-production.up.railway.app/enviar-correo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ nombre, email, mensaje }),
      });
      if (response.ok) {
        console.log("Correo electrónico enviado exitosamente");
        setNombre ("")
        setEmail ("")
        setMensaje ("")

        setCorreoEnviado(true);

        // Aquí puedes realizar cualquier acción adicional que desees, como mostrar un mensaje de éxito
      } else {
        console.error("Error al enviar el correo electrónico");
        // Aquí puedes manejar el caso de error, por ejemplo, mostrar un mensaje de error
      }
    } catch (error) {
      console.error(error);
      // Aquí puedes manejar el caso de error, por ejemplo, mostrar un mensaje de error
    }
  };

  const handleClose = () => {
    setCorreoEnviado(false);
  };

  return (
    <ContactContainer id="contact">
      <ContactTitle>Contacto</ContactTitle>
      <ContactForm onSubmit={handleSubmit}>
        <ContactInput
          type="text"
          placeholder="Nombre"
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <ContactInput
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ContactTextArea
          placeholder="Mensaje"
          required
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        <ContactButton type="submit">Enviar</ContactButton>
      </ContactForm>
      <div>
      {/* Renderizar el formulario */}
      {correoEnviado && (
        <PopupContainer>
          <PopupContent>
            <h3>Correo enviado</h3>
            <p>El correo ha sido enviado exitosamente.</p>
            <button onClick={handleClose}>Cerrar</button>
          </PopupContent>
        </PopupContainer>
      )}
    </div>
    </ContactContainer>
  );
};

export default Contact;

// Estilos de Contact Component

const ContactContainer = styled.section`
  background: linear-gradient(
      rgba(247, 249, 217, 0.8),
      rgba(247, 249, 217, 0.8)
    ),
    url(/background-image.png) no-repeat;
  color: #343a40;
  padding: 5rem;
  text-align: center;
  background-size: cover;
`;

const ContactTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContactInput = styled.input`
  font-size: 1.5rem;
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 5px;
  border: none;
  width: 100%;
  color: #ece3da;
`;

const ContactTextArea = styled.textarea`
  font-size: 1.5rem;
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 5px;
  border: none;
  width: 100%;
`;

const ContactButton = styled.button`
  font-size: 1.5rem;
  padding: 1rem 2rem;
  background-color: #ba1e4a;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ba1e4a;
  }
`;

// Estilos de pop-up

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  max-width: 400px;
  text-align: center;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #666;
  }

  button {
    background-color: #007bff;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 1rem;
  }
`;