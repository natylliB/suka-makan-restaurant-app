class Page {
  constructor() {
    if (this.constructor === Page) {
      throw new TypeError(`Abstract Class "${this.constructor.name}" cannot be instantiated directly.`);
    }
  }

  async render() {
    throw new EvalError(`You are running "${this.render.name}" method from Abstract Class`);
  }

  async afterRender() {
    throw new EvalError(`You are running "${this.afterRender.name}" method from Abstract Class`);
  }
}

export default Page;
