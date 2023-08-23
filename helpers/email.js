import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
    
    const {email, nombre, token} = datos;

    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      });

      //Infor del Email
      const info = await transport.sendMail({
        from: '"Uptask - Administrador de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject: "Uptasl - Comprueba tu Cuenta",
        text: "Comprueba tu cuenta en Uptask",
        html: `<p> Hola ${nombre} Comprueba tu cuenta en Uptask</p>
            <p>Tu Cuenta esta casi lista, solo debes de comprobarla en el siguiente enlace:</p>

            <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>

            <p> Si tu no creaste esta cuenta, puedes ignorar el Mensaje</p>
        
        
        `,
      })
}

export const emailOlvidePassword = async (datos) => {
    
  const {email, nombre, token} = datos;

  const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
    });

    //Infor del Email
    const info = await transport.sendMail({
      from: '"Uptask - Administrador de Proyectos" <cuentas@uptask.com>',
      to: email,
      subject: "Uptasl - Reestablece tu Password",
      text: "Restablece tu Password",
      html: `<p> Hola ${nombre} has solicitado reestablecer tu contraseña</p>
          <p>Solo sigue el siguiente enlace para generar una nueva contraseña:</p>

          <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Contraseña</a>

          <p> Si tu no lo solicitaste, puedes ignorar el Mensaje</p>
      
      
      `,
    })
}
