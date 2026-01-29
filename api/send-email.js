import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { primeiro_nome, sobrenome, email, telefone, cidade, observacao } = req.body;

  // Configuração específica para GMAIL
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, 
    },
  });

  try {
    await transporter.sendMail({
      from: `"Lead Page" <${process.env.EMAIL_USER}>`,
      to: "mkt@terradesenvolvimento.com.br", 
      subject: `🚀 Novo Lead: ${primeiro_nome} ${sobrenome}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #eee; padding: 20px; border-radius: 12px;">
          <h2 style="color: #333;">Novo Contato via Site</h2>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Nome:</strong> ${primeiro_nome} ${sobrenome}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${telefone}</p>
          <p><strong>Cidade:</strong> ${cidade}</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <strong>Mensagem:</strong><br/>${observacao}
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Erro no envio:", error);
    return res.status(500).json({ error: error.message });
  }
}