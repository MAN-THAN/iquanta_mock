
import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "../styleSheets/header.css"

function Header() {
    return (
        <header className="p-0 text-bg-dark" style={{ background: "#010101" }}>
            <div className="container-fluid px-5 py-2 ">
                <div className="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-between py-2 ">
                    <div>
                        <Link to="/"><img src={require("../images/iquanta_Logo.png")} alt="iquanta_logo" className='img-fluid iquanta_logo' /></Link>
                    </div>
                    <div >
                        <Typography variant='h4'>iCAT 1.O 2023</Typography>
                    </div>

                    <div className="d-flex gap-3 ">
                        <div className='text-end'>
                            <Typography sx={{ fontFamily: "var(--font-inder)", fontSize: "21px", fontWeight: 400 }} >Lakshay parwar</Typography>
                            <Typography sx={{ fontFamily: "var(--font-inder)", fontSize: "13px", fontWeight: 400 }}>User id :1222047</Typography>
                        </div>
                        <div className=''>
                            <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="mdo" width="50" height="50" className="rounded" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header