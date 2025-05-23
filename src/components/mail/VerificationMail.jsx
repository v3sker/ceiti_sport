export default function VerificationMail({
  fullName,
  emailConfirmationLink,
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100svh",
        display: "flex",
      }}
    >
      <div
        style={{
          width: 450,
          height: "fit-content",
          borderRadius: "0.75rem",
          position: "relative",
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
          margin: "auto",
        }}
      >
        <table
          role="presentation"
          style={{width: "100%", height: "fit-content", paddingTop: "1rem"}}
        >
          <tbody>
          <tr>
            <td align="center">
              <h1
                style={{
                  fontSize: "2.25rem",
                  lineHeight: "2.5rem",
                  fontWeight: 900,
                  textAlign: "center"
                }}
              >
                CEITI 
                <span
                  style={{
                    backgroundClip: "text",
                    color: "transparent",
                    backgroundImage:
                      "linear-gradient(90deg, rgba(63,55,190,1) 6%, rgba(122,53,222,1) 36%, rgba(182,0,255,1) 100%)"
                  }}
                >
                Sport
              </span>
              </h1>
            </td>
          </tr>
          </tbody>
        </table>
        <table role="presentation" style={{width: "100%", marginTop: "1rem"}}>
          <tbody>
          <tr>
            <td
              style={{backgroundColor: "rgb(241, 245, 249)", padding: "2rem 0"}}
            >
              <p
                style={{
                  color: "rgb(23, 23, 23)",
                  fontSize: "1.875rem",
                  fontWeight: 900,
                  textAlign: "center",
                  margin: 0
                }}
              >
                {fullName}
              </p>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1.25rem",
                  lineHeight: "1.75rem",
                  fontWeight: 700,
                  color: "rgb(115, 115, 115)",
                  margin: 0
                }}
              >
                Добро пожаловать в CEITI Sport.
              </p>
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "2rem",
                borderBottom: "1px solid rgb(228, 228, 231)"
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  color: "rgb(115, 115, 115)",
                  fontSize: "1.15rem",
                  lineHeight: "1.75rem",
                  fontWeight: 400
                }}
              >
                Для завершения регистрации - подтвердите Вашу почту и привяжите Ваш личный T-OTP.
              </p>
              <div style={{textAlign: "center", marginTop: "1rem"}}>
                <a
                  href={emailConfirmationLink}
                  target="_blank"
                  style={{textDecoration: "none"}}
                >
                  <button
                    style={{
                      padding: "8px 12px",
                      backgroundColor: "rgb(25, 25, 25)",
                      borderRadius: "0.375rem",
                      color: "white",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      border: "none",
                      cursor: "pointer",
                      marginBottom: "0.5rem"
                    }}
                  >
                    Подтвердить почту
                  </button>
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "1rem",
                textAlign: "center",
                color: "rgb(163, 163, 163)"
              }}
            >
              <p>Если кнопки не нажимаются:</p>
              <a
                href={emailConfirmationLink}
                style={{
                  color: "rgb(163, 163, 163)",
                  textDecoration: "underline",
                  fontSize: '0.7rem'
                }}
              >
                {emailConfirmationLink}
              </a>
              <br/>
              <p style={{marginTop: "0.5rem"}}>
                Made with ❤ by{" "}
                <a
                  href="https://github.com/v3sker"
                  target="_blank"
                  style={{color: "rgb(163, 163, 163)", textDecoration: "underline"}}
                >
                  v3sker
                </a>
              </p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}