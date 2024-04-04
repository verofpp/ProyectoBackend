const ClasesModel = require('../models/clases.m');
const ActividadesModel = require('../models/actividades.m');
const TrimestreModel = require('../models/trimestre.m');

class ActividadesAsignarController {
static async mostrarFormulario(req, res) {
    try {
        const clases = await ClasesModel.mostrarClases();
        const actividades = await ActividadesModel.mostrarActividades();
        const trimestres = await TrimestreModel.mostrarTrimestres();
        res.render('asignaractividades', { clases: clases, actividades: actividades, trimestres: trimestres });
    } catch (error) {
        res.status(500).send(error);
        }
    }
}
module.exports = ActividadesAsignarController;