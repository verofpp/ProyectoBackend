-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 04-04-2024 a las 01:39:34
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `BasedeDatos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades`
--

CREATE TABLE `actividades` (
  `Id` int(11) NOT NULL,
  `Actividad` varchar(20) NOT NULL,
  `Materia` int(11) NOT NULL,
  `Semana` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `actividades`
--

INSERT INTO `actividades` (`Id`, `Actividad`, `Materia`, `Semana`) VALUES
(1, 'Clase', 1, 1),
(2, 'Clase', 1, 2),
(3, 'Examen', 1, 3),
(4, 'Clase', 1, 4),
(5, 'Exposición', 1, 5),
(6, 'Trabajo', 1, 6),
(7, 'Clase', 1, 7),
(8, 'Formulario', 1, 8),
(9, 'Clase', 1, 9),
(10, 'Examen', 1, 10),
(11, 'Clase', 1, 11),
(12, 'Trabajo', 1, 12),
(13, 'Clase', 2, 1),
(14, 'Examen', 2, 2),
(15, 'Trabajo', 2, 3),
(16, 'Clase', 2, 4),
(17, 'Formulario', 2, 5),
(18, 'Clase', 2, 6),
(19, 'Exposición', 2, 7),
(20, 'Clase', 2, 8),
(21, 'Trabajo', 2, 9),
(22, 'Examen', 2, 10),
(23, 'Clase', 2, 11),
(24, 'Formulario', 2, 12),
(25, 'Clase', 3, 1),
(26, 'Clase', 3, 2),
(27, 'Examen', 3, 3),
(28, 'Clase', 3, 4),
(29, 'Exposición', 3, 5),
(30, 'Trabajo', 3, 6),
(31, 'Clase', 3, 7),
(32, 'Formulario', 3, 8),
(33, 'Clase', 3, 9),
(34, 'Examen', 3, 10),
(35, 'Clase', 3, 11),
(36, 'Trabajo', 3, 12),
(37, 'Clase', 4, 1),
(38, 'Examen', 4, 2),
(39, 'Trabajo', 4, 3),
(40, 'Clase', 4, 4),
(41, 'Formulario', 4, 5),
(42, 'Clase', 4, 6),
(43, 'Exposición', 4, 7),
(44, 'Clase', 4, 8),
(45, 'Trabajo', 4, 9),
(46, 'Examen', 4, 10),
(47, 'Clase', 4, 11),
(48, 'Formulario', 4, 12),
(49, 'Clase', 5, 1),
(50, 'Examen', 5, 2),
(51, 'Trabajo', 5, 3),
(52, 'Clase', 5, 4),
(53, 'Formulario', 5, 5),
(54, 'Clase', 5, 6),
(55, 'Examen', 5, 7),
(56, 'Clase', 5, 8),
(57, 'Trabajo', 5, 9),
(58, 'Examen', 5, 10),
(59, 'Clase', 5, 11),
(60, 'Formulario', 5, 12),
(61, 'Clase', 6, 1),
(62, 'Examen', 6, 2),
(63, 'Trabajo', 6, 3),
(64, 'Clase', 6, 4),
(65, 'Exposición', 6, 5),
(66, 'Clase', 6, 6),
(67, 'Formulario', 6, 7),
(68, 'Clase', 6, 8),
(69, 'Trabajo', 6, 9),
(70, 'Examen', 6, 10),
(71, 'Clase', 6, 11),
(72, 'Formulario', 6, 12),
(73, 'Clase', 7, 1),
(74, 'Examen', 7, 2),
(75, 'Trabajo', 7, 3),
(76, 'Clase', 7, 4),
(77, 'Formulario', 7, 5),
(78, 'Clase', 7, 6),
(79, 'Exposición', 7, 7),
(80, 'Clase', 7, 8),
(81, 'Trabajo', 7, 9),
(82, 'Examen', 7, 10),
(83, 'Clase', 7, 11),
(84, 'Formulario', 7, 12),
(85, 'Clase', 8, 1),
(86, 'Examen', 8, 2),
(87, 'Trabajo', 8, 3),
(88, 'Clase', 8, 4),
(89, 'Formulario', 8, 5),
(90, 'Clase', 8, 6),
(91, 'Exposición', 8, 7),
(92, 'Clase', 8, 8),
(93, 'Trabajo', 8, 9),
(94, 'Examen', 8, 10),
(95, 'Clase', 8, 11),
(96, 'Formulario', 8, 12),
(97, 'Recuperativo', 1, 13),
(98, 'Recuperativo', 2, 13),
(99, 'Recuperativo', 3, 13),
(100, 'Recuperativo', 4, 13),
(101, 'Recuperativo', 5, 13),
(102, 'Recuperativo', 6, 13),
(103, 'Recuperativo', 7, 13),
(104, 'Recuperativo', 8, 13);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades_sección`
--

CREATE TABLE `actividades_sección` (
  `Id` int(11) NOT NULL,
  `Id_Actividad` int(11) NOT NULL,
  `Id_Clase` int(11) NOT NULL,
  `Trimestre` int(11) NOT NULL,
  `Fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `actividades_sección`
--

INSERT INTO `actividades_sección` (`Id`, `Id_Actividad`, `Id_Clase`, `Trimestre`, `Fecha`) VALUES
(1, 1, 1, 1, '2023-09-12'),
(2, 1, 1, 1, '2023-09-12'),
(3, 1, 1, 1, '2023-09-12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth`
--

CREATE TABLE `auth` (
  `Id` int(10) NOT NULL,
  `Usuario` varchar(20) NOT NULL,
  `Password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `auth`
--

INSERT INTO `auth` (`Id`, `Usuario`, `Password`) VALUES
(1, '@verofpp', '$2b$05$2k5DlhoC8/xZIHxy8EA2B.StnkB8XrSmm92CiQnoG1Eo1UzYOd6Lu');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth2`
--

CREATE TABLE `auth2` (
  `Id` int(11) NOT NULL,
  `Usuario` varchar(20) NOT NULL,
  `Password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `auth2`
--

INSERT INTO `auth2` (`Id`, `Usuario`, `Password`) VALUES
(2, '@cr7', '$2b$05$..w2uIAVABylzFIU9fnHGOknf4Qjq2bEhpaeyr7dvrUIOQ93C/9G.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clases`
--

CREATE TABLE `clases` (
  `Id` int(11) NOT NULL,
  `Id_Profesor` int(11) NOT NULL,
  `Id_Materia` int(11) NOT NULL,
  `Id_Sección` int(11) NOT NULL,
  `Horario` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clases`
--

INSERT INTO `clases` (`Id`, `Id_Profesor`, `Id_Materia`, `Id_Sección`, `Horario`) VALUES
(1, 1, 1, 1, 'Martes'),
(2, 1, 2, 1, 'Jueves'),
(3, 3, 3, 1, 'Martes'),
(4, 3, 4, 1, 'Miércoles'),
(5, 2, 5, 1, 'Jueves'),
(6, 4, 6, 1, 'Martes'),
(7, 4, 7, 1, 'Miércoles'),
(8, 2, 8, 1, 'Lunes'),
(9, 1, 1, 2, 'Miércoles'),
(10, 1, 2, 2, 'Miércoles'),
(11, 3, 3, 2, 'Viernes'),
(12, 3, 4, 2, 'Lunes'),
(13, 2, 5, 2, 'Martes'),
(14, 4, 6, 2, 'Lunes'),
(15, 4, 7, 2, 'Jueves'),
(16, 2, 8, 2, 'Jueves'),
(17, 1, 1, 3, 'Viernes'),
(18, 1, 2, 3, 'Viernes'),
(19, 3, 3, 3, 'Sábado'),
(20, 3, 4, 3, 'Domingo'),
(21, 2, 5, 3, 'Sábado'),
(22, 4, 6, 3, 'Viernes'),
(23, 4, 7, 3, 'Domingo'),
(24, 2, 8, 3, 'Viernes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

CREATE TABLE `eventos` (
  `Id` int(11) NOT NULL,
  `Tipo` varchar(20) DEFAULT NULL,
  `Motivo` varchar(50) DEFAULT NULL,
  `Fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`Id`, `Tipo`, `Motivo`, `Fecha`) VALUES
(1, 'Feriado', 'Carnaval', '2024-02-12'),
(2, 'Feriado', 'Carnaval', '2024-02-13'),
(3, 'Feriado', 'Semana Santa', '2024-03-24'),
(4, 'Feriado', 'Semana Santa', '2024-03-25'),
(5, 'Feriado', 'Semana Santa', '2024-03-26'),
(6, 'Feriado', 'Semana Santa', '2024-03-27'),
(7, 'Feriado', 'Semana Santa', '2024-03-28'),
(8, 'Feriado', 'Semana Santa', '2024-03-29'),
(9, 'Feriado', 'Semana Santa', '2024-03-30'),
(10, 'Feriado', 'Día del Trabajador', '2024-05-01'),
(11, 'Feriado', 'Día de Independencia', '2024-04-19'),
(12, 'Feriado', 'Día de la Virgen de Coromoto', '2023-09-11'),
(13, 'Feriado', 'Día de la Resistencia Indígena', '2023-10-12'),
(14, 'Feriado', 'Día de José Gregorio Hernández', '2023-10-26');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias`
--

CREATE TABLE `materias` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `materias`
--

INSERT INTO `materias` (`Id`, `Nombre`) VALUES
(1, 'Matematica IV'),
(2, 'Diseño Logico II'),
(3, 'Entornos De desarrollo'),
(4, 'Analisis y Diseño de Sistemas'),
(5, 'Estructura de datos I'),
(6, 'Backend'),
(7, 'Base de Datos I'),
(8, 'Lógica Básica');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesores`
--

CREATE TABLE `profesores` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(255) DEFAULT NULL,
  `Apellido` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `profesores`
--

INSERT INTO `profesores` (`Id`, `Nombre`, `Apellido`) VALUES
(1, 'Katiuska', 'Morillo'),
(2, 'Yerson', 'Gonzales'),
(3, 'Suleima', 'Espinoza'),
(4, 'Roberto', 'Di Michele');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `secciones`
--

CREATE TABLE `secciones` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `secciones`
--

INSERT INTO `secciones` (`Id`, `Nombre`) VALUES
(1, 'Semipresencial'),
(2, 'Virtual'),
(3, 'Fin de semana');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trimestre`
--

CREATE TABLE `trimestre` (
  `Id` int(11) NOT NULL,
  `Inicio` date NOT NULL,
  `Fin` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `trimestre`
--

INSERT INTO `trimestre` (`Id`, `Inicio`, `Fin`) VALUES
(1, '2023-09-11', '2023-12-14'),
(2, '2024-01-15', '2024-04-20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(20) NOT NULL,
  `Correo` varchar(20) NOT NULL,
  `Rol` enum('Profesor','Director') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`Id`, `Nombre`, `Correo`, `Rol`) VALUES
(1, 'Verónica', '@verofpp', 'Profesor'),
(2, 'Cris', '@cr7', 'Director');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `id_materiafk` (`Materia`);

--
-- Indices de la tabla `actividades_sección`
--
ALTER TABLE `actividades_sección`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `fkidactividad` (`Id_Actividad`),
  ADD KEY `trimestrefk` (`Trimestre`),
  ADD KEY `idclasefk` (`Id_Clase`) USING BTREE;

--
-- Indices de la tabla `auth`
--
ALTER TABLE `auth`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `auth2`
--
ALTER TABLE `auth2`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `clases`
--
ALTER TABLE `clases`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `materia_id` (`Id_Materia`),
  ADD KEY `sección_id` (`Id_Sección`),
  ADD KEY `profesor_id` (`Id_Profesor`) USING BTREE;

--
-- Indices de la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `profesores`
--
ALTER TABLE `profesores`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `secciones`
--
ALTER TABLE `secciones`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `trimestre`
--
ALTER TABLE `trimestre`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actividades`
--
ALTER TABLE `actividades`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT de la tabla `actividades_sección`
--
ALTER TABLE `actividades_sección`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `clases`
--
ALTER TABLE `clases`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `eventos`
--
ALTER TABLE `eventos`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `materias`
--
ALTER TABLE `materias`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `profesores`
--
ALTER TABLE `profesores`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `secciones`
--
ALTER TABLE `secciones`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `trimestre`
--
ALTER TABLE `trimestre`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD CONSTRAINT `actividades_ibfk_1` FOREIGN KEY (`Materia`) REFERENCES `materias` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `actividades_sección`
--
ALTER TABLE `actividades_sección`
  ADD CONSTRAINT `actividades_sección_ibfk_1` FOREIGN KEY (`Trimestre`) REFERENCES `trimestre` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actividades_sección_ibfk_2` FOREIGN KEY (`Id_Actividad`) REFERENCES `actividades` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actividades_sección_ibfk_3` FOREIGN KEY (`Id_Clase`) REFERENCES `clases` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `auth`
--
ALTER TABLE `auth`
  ADD CONSTRAINT `auth_ibfk_1` FOREIGN KEY (`Id`) REFERENCES `usuarios` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `auth2`
--
ALTER TABLE `auth2`
  ADD CONSTRAINT `auth2_ibfk_1` FOREIGN KEY (`Id`) REFERENCES `usuarios` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `clases`
--
ALTER TABLE `clases`
  ADD CONSTRAINT `clases_ibfk_2` FOREIGN KEY (`Id_Materia`) REFERENCES `materias` (`Id`),
  ADD CONSTRAINT `clases_ibfk_3` FOREIGN KEY (`Id_Sección`) REFERENCES `secciones` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `clases_ibfk_4` FOREIGN KEY (`Id_Profesor`) REFERENCES `profesores` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
