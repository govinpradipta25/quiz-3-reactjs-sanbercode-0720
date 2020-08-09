import React from 'react';

const About = () => {
    return (
        <>
            <h2 className='title'>
                
                <b>Data Peserta Sanbercode Bootcamp Reactjs</b>

            </h2>
            
            <table>
                <tbody>
                <tr>
                    <td className='nama_no'>1.</td>
                    <td className='nama_nama'><strong>Nama</strong></td>
                    <td className='nama_no'>:</td>
                    <td className='nama_saya'>Govin Yudian Pradipta</td>
                </tr>
                <tr>
                    <td>2.</td>
                    <td><strong>Email</strong></td>
                    <td>:</td>
                    <td>goviyudian.p@gmail.com</td>
                </tr>
                <tr>
                    <td>3.</td>
                    <td><strong>Sistem Operasi yang digunakan</strong></td>
                    <td>:</td>
                    <td>Windows 10</td>
                </tr>
                <tr>
                    <td>5.</td>
                    <td><strong>Akun Telegram</strong></td>
                    <td>:</td>
                    <td>@govinyudianpradipta</td>
                </tr>                
                </tbody>
            </table>
        </>
    )
}

export default About