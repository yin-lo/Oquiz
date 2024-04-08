const dataMapper = require("../database/dataMapper")
const Level = require("../models/Active Record/Level")

const levelController = {
    displayLevels: async (req, res) => {
        // Toutes les lignes du try vont etre executees tant qu'on ne rencontre pas d'erreur
        try {

            // Recuperer la liste de mes levels
            // const levels = await dataMapper.getAllLevels()
            const levels = await Level.getAll();

            res.render('levels', { levels })
        } catch (error) {
            // Si la moindre erreur se produit alors on rentre dans le catch
            console.log(error.message)
            res.status(500).render('500')
        }
    },

    addLevel: async (req, res) => {
        try {
            // await dataMapper.createLevel({ name: req.body.name })
            // Avec le design patern active record on va d'abord instancier un objet grace a notre classe
            const newLevel = new Level({ name: req.body.name })
            // puis appeler la methode create
            await newLevel.create()
            res.redirect('/levels')
        } catch (error) {
            // Si la moindre erreur se produit alors on rentre dans le catch
            console.log(error.message)
            res.status(500).render('500')
        }
    }
}

module.exports = levelController;