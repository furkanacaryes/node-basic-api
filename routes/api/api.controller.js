
import debug from 'debug';
import { blue, bold, red } from 'chalk';
import User from '../../models/user.model';


export const getHandler = (req, res) => {
  User.find({})
    .then(data => {
      debug('api')((blue(`${bold(302)} Found`)));
      return res.status(302).json(data);
    })
};

export const postHandler = (req, res) => {
  // TODO: check if req.body fits to document
  const newUser = new User(req.body);
  newUser.save()
    .then(ok => {
      debug('api')(blue(`${bold(201)} Created!`));
      return res.status(201).send('Created!');
    })
    .catch(err => errorHandler(err, res));
};

export const deleteHandler = (req, res) => {
  if(!req.params.id) {
    return res.status(406).send('Please specify ID in path!');
  }
  User.findByIdAndDelete(req.params.id)
    .then(ok => {
      debug('api')(blue(`${bold(410)} Pew!`));
      return res.status(410).send('Pew!');
    })
    .catch(err => errorHandler(err, res));
}

export const putHandler = (req ,res) => {
  if(!req.params.id) {
    return res.status(406).send('Please specify ID in path!');
  }
  User.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(ok => {
      debug('api')(blue(`${bold(418)} Updated!`));
      return res.status(418).send(ok);
    })
    .catch(err => errorHandler(err, res))
}

export const errorHandler = (err, res) => {
  debug('api')(red(`${bold(400)} Mongo Error!`));
  return res.status(417).send('Database Error!');
};

