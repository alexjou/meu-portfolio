import React, { useState } from 'react'
import Link from '@material-ui/icons/Language'
import Modal from "@material-ui/core/Modal";
import SpData from './SpData'
import Title from './Title'
import { makeStyles } from '@material-ui/core';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '80%',
    height: '80%',
    backgroundColor: theme.palette.background.paper,
    padding: 30
  }
}));

const ShortProject = () => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(false);
  const handleOpen = (prop) => {
    setOpen(true);
    setSelected(prop);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const SingleShortProject = (prop) => {
    return (
      <>
        <div
          data-aos-duration="600"
          data-aos={prop.animate}
          id="SingleShortProject"
        >
          <img src={prop.src} alt="Error" />
          <div id="SingleShortProjectDesc">
            <h2> {prop.title} </h2>
            <p> {prop.desc} </p>
            <button type="button" style={{ borderRadius: 10, backgroundColor: '#00ffff', padding: 10, border: 0, marginTop: 10 }} onClick={() => handleOpen(prop)}>
              Mais Informações
            </button>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <section id="ShortProjects">
        <Title title="Projetos" desc="Aqui estão alguns dos projetos em que participei no desenvolvimento." />
        <div id="ProjectContentWrapper">
          {SpData.map((data, index) => {
            return (
              <SingleShortProject
                key={index}
                src={data.src}
                gifWeb={data.gifWeb}
                gifCell={data.gifCell}
                descMore={data.descMore}
                title={data.title}
                desc={data.desc}
                link={data.link}
                animate={data.animate}
              />
            )
          })}
        </div>
        <Modal open={open} onClose={handleClose}>
          <div style={modalStyle} className={classes.paper}>
            <h2 style={{ color: '#000' }}>{selected.title}</h2>
            <p style={{ textAlign: 'center', paddingBottom: 20, paddingTop: 10, color: '#000' }}> {selected.descMore} </p>
            {selected.gifWeb ?
              (<img style={{ width: '80%', height: '80%' }} src={selected.gifWeb} alt="Error" />)
              :
              (<img style={{ width: 300, height: '100%' }} src={selected.gifCell} alt="Error" />)}
            {selected.link &&
              <a href={selected.link} target="_blank" rel="noopener noreferrer">
                <Link
                  style={{ fontSize: ' 2.5rem ', margin: '15px 0px' }}
                />
              </a>
            }
          </div>
        </Modal>
      </section>
    </>
  )
}
export default ShortProject
