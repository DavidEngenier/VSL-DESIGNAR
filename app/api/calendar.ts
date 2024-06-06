import { getSession } from 'next-auth/react';
import { google } from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const { accessToken } = session;

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({ access_token: accessToken });

  const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

  switch (req.method) {
    case 'POST':
      const event = {
        summary: 'Appointment',
        start: { dateTime: req.body.start },
        end: { dateTime: req.body.end },
      };

      calendar.events.insert(
        {
          calendarId: 'primary', // ID del calendario al que se insertará el evento, 'primary' para el calendario principal
          requestBody: { // El recurso del evento a crear
            summary: 'Appointment', // Título del evento
            start: { dateTime: req.body.start }, // Fecha y hora de inicio del evento
            end: { dateTime: req.body.end } // Fecha y hora de finalización del evento
          }
        },
        (err: Error | null, event: any) => { // Declaración explícita de los tipos de err y event
          if (err) {
            res.status(500).json({ error: err });
            return;
          }
          res.status(200).json({ event });
        }
      );
      
      
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
