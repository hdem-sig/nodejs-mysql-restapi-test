CREATE DATABASE sitiosnuevos /*!40100 DEFAULT CHARACTER SET latin1 */;
USE sitiosnuevos

/*Table structure for table sitios */

DROP TABLE IF EXISTS sitios;

CREATE TABLE sitios (
	idsitio int(11) NOT NULL AUTO_INCREMENT,
	nombre_sitio VARCHAR(128) NULL , 
	tipositio VARCHAR(16) NULL , 
	descripción VARCHAR(1024) NULL , 
	fecha_reg VARCHAR(64) NULL , 
	nombre_persona VARCHAR(128) NULL , 
	correo VARCHAR(56) NULL , 
	latitud VARCHAR(128) NULL , 
	longitud VARCHAR(128) NULL ,
	 PRIMARY KEY (idsitio)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1 COMMENT = 'Tabla que guarda datos del formulario REGISTRAR SITIO';


/*Data for the table persona */
INSERT INTO sitiosnuevos.sitios
(nombre_sitio, tipositio, descripción, fecha_reg, nombre_persona, correo, latitud, longitud)
values
('Felicia','	Cultural','Petroglifos ubicados en Guaviare ', '2022-08-14', 'Carmelo Valencia', 'carmelo@gmail.com', '1.5873213274098943', '-73.11401367187501'),
('Felicia','	Cultural','Petroglifos ubicados en Guaviare ', '2022-08-14', 'Carmelo Valencia', 'carmelo@gmail.com', '1.5873213274098943', '-73.11401367187501'),
('Felicia','	Cultural','Petroglifos ubicados en Guaviare ', '2022-08-14', 'Carmelo Valencia', 'carmelo@gmail.com', '1.5873213274098943', '-73.11401367187501');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;


