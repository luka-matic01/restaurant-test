import { sendEmail } from "@/utils/mail";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  const { email, poruka, naslovPoruke, ime, prezime } = await req.json();
  try {
    let mail;

    mail = {
      from: `banjaluka.hedonist@gmail.com`,
      to: `restoran@hedonist.com`,
      subject: `${naslovPoruke}`,
      html: `
				<table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#36394c"
				style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
				<tr>
					<td>
						<table style="background-color: #36394c; max-width:670px;  margin:0 auto;" width="100%" border="0"
							align="center" cellpadding="0" cellspacing="0">
							<tr>
								<td style="height:80px;">&nbsp;</td>
							</tr>
							
							<tr>
								<td style="height:20px;">&nbsp;</td>
							</tr>
							<tr>
								<td>
									<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
										style="max-width:670px;background:#ffff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
										<tr>
											<td style="height:40px;">&nbsp;</td>
										</tr>
										<tr>
											<td style="padding:0 35px;">
												<h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">Imate novu poruku od ${ime} ${prezime}</h1>
												<span
													style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
												<p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
												${poruka}
												</p>
												<p
													style="background:#c55a4b;text-decoration:none !important; font-weight:700; margin-top:35px; color:#ffff; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">Email: ${email}</p>
													
											</td>
										</tr>
										<tr style="height:60px;">
										</tr>				
										<tr>
											<td style="height:40px;">&nbsp;</td>
										</tr>
									</table>
								</td>
							<tr>
								<td style="height:20px;">&nbsp;</td>
							</tr>
							
							<tr>
								<td style="height:80px;">&nbsp;</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
				`,
    };
    let response = await sendEmail(mail);

    if (response.messageId !== null) {
      return NextResponse.json({ id: response.messageId }, { status: 200 });
    } else {
      return NextResponse.json(
        {
          message: "Pojavila se greška prilikom slanja mail-a!",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json({
      message: error.message,
    });
  }
}
