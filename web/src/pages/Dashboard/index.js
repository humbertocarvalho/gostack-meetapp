import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import Loader from 'react-loader-spinner';
import api from '~/services/api';

import { Container, Meetups, Meetup, Detalhar } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('/organized');

      console.tron.log(response);
      const data = response.data.map(meetup => {
        return {
          ...meetup,
          formattedDate: format(
            parseISO(meetup.date),
            "dd 'de' MMMM, ' ás 'HH'h'",
            { locale: pt }
          ),
        };
      });

      setMeetups(data);
      setLoading(false);
    }
    loadMeetups();
  }, []);

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <Link to="meetups/create">
          <MdAddCircleOutline color="#fff" size={22} />
          Novo Meetup
        </Link>
      </header>

      {loading ? (
        <div className="loading">
          <Loader type="ThreeDots" color="#f94d6a" width={80} height={80} />
        </div>
      ) : (
        <Meetups>
          {meetups.map(meetup => (
            <Meetup
              past={meetup.past}
              key={meetup.id}
              to={`/meetups/${meetup.id}`}
            >
              <span>{meetup.title}</span>
              <Detalhar>
                <p>{meetup.formattedDate}</p>
                <MdChevronRight color="#fff" size={22} />
              </Detalhar>
            </Meetup>
          ))}
        </Meetups>
      )}
    </Container>
  );
}
