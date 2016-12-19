'use strict';

const Nodal = require('nodal');
const Project = Nodal.require('app/models/project.js');

class V1ProjectsController extends Nodal.Controller {

  index() {

    Project.query()
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models);

      });

  }

  show() {

    Project.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    Project.create(this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  update() {

    Project.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    Project.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = V1ProjectsController;
