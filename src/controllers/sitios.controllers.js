import {pool} from '../db.js'

export const getSitios = async (req, res) => {
    try {
        const [rows] = await pool.query ('SELECT * FROM sitiosnuevos.sitios')
        res.json(rows)
    } catch (error){
        return res.status(500).json({
            message: 'Algo va mal'
        })
    }
    }

export const getSitio = async (req, res) => {
    try {
        const [rows]= await pool.query ("SELECT * FROM sitiosnuevos.sitios WHERE idsitio = ?", [req.params.id])
        if (rows.lenght <= 0) return res.status(404).json({
            message: 'Sitio no encontrado'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo va mal'
        })
    }
    }

export const createSitios = async (req, res) => {
    const {nombre_sitio, tipositio} = req.body

    try {
        const [rows] = await pool.query ('INSERT INTO sitiosnuevos.sitios (nombre_sitio, tipositio) VALUES (?, ?)', [nombre_sitio, tipositio])
        res.send({ 
            idsitio: rows.insertId,    
            nombre_sitio,
            tipositio,
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Algo va mal'
        })
    }
    }


export const deleteSitios = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM sitiosnuevos.sitios WHERE idsitio = ?', [req.params.id] ) 
        if (result.affectedRows <= 0) return res.status(404).json({
        message: 'Sitio no encontrado'
        })
        res.send(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo va mal'
        })
    }
    }


export const updateSitios = async (req, res) => {
    const {id} = req.params
        try {
        const  {nombre_sitio, tipositio} = req.body
        const [result] = await pool.query( 'UPDATE sitiosnuevos.sitios SET nombre_sitio = IFNULL(?, nombre_sitio), tipositio = IFNULL(?, tipositio) WHERE idsitio= ?', [nombre_sitio, tipositio, id] )

        console.log(result)

        if (result.affectedRows === 0 ) return res.status(404).json({
            message: 'Sitio no encontrado'
        })

        const [rows] = await pool.query('SELECT * FROM sitiosnuevos.sitios WHERE idsitio= ?',[id])
        
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo va mal'
        })
}
}
