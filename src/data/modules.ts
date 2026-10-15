export type ModuleStatus = 'Functional' | 'Integrating' | 'Planned';

export type ModuleDefinition = {
  id: string;
  title: string;
  category: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  status: ModuleStatus;
  tags: string[];
};

export const modules: ModuleDefinition[] = [
  { id: 'neural-playground', title: 'Neural Playground', category: 'Neural Networks and Optimization', description: 'Interactive decision boundary and hidden-layer learning lab.', difficulty: 'Intermediate', status: 'Functional', tags: ['NN', 'classification', 'visualization'] },
  { id: 'optimizers-arena', title: 'Optimizers Arena', category: 'Neural Networks and Optimization', description: 'Compare SGD, Momentum, RMSProp, and Adam on a loss surface.', difficulty: 'Intermediate', status: 'Integrating', tags: ['optimization', 'loss'] },
  { id: 'neural-network-builder', title: 'Neural Network Builder', category: 'Neural Networks and Optimization', description: 'Add layers, inspect shapes, and trace a forward pass.', difficulty: 'Intermediate', status: 'Planned', tags: ['architecture', 'tensor'] },
  { id: 'backpropagation-visualizer', title: 'Backpropagation Visualizer', category: 'Neural Networks and Optimization', description: 'Inspect gradients and weight updates across a toy network.', difficulty: 'Advanced', status: 'Planned', tags: ['gradient', 'learning'] },
  { id: 'polynomial-regression-lab', title: 'Polynomial Regression Lab', category: 'Neural Networks and Optimization', description: 'Fit curves to noisy data and visualize underfitting or overfitting.', difficulty: 'Beginner', status: 'Functional', tags: ['regression', 'curve fit'] },
  { id: 'k-means-lab', title: 'K-Means Lab', category: 'Neural Networks and Optimization', description: 'Cluster points and watch centroids move over time.', difficulty: 'Intermediate', status: 'Planned', tags: ['clustering', 'centroids'] },
  { id: 'diffusion-lab', title: 'Diffusion Lab', category: 'Generative Systems and Complex Systems', description: 'Explore noise and denoising over repeated steps.', difficulty: 'Advanced', status: 'Planned', tags: ['diffusion', 'noise'] },
  { id: 'reaction-diffusion-studio', title: 'Reaction-Diffusion Studio', category: 'Generative Systems and Complex Systems', description: 'Generate patterns from reaction and diffusion parameters.', difficulty: 'Advanced', status: 'Planned', tags: ['pattern', 'simulation'] },
  { id: 'boids-swarm-intelligence', title: 'Boids / Swarm Intelligence', category: 'Generative Systems and Complex Systems', description: 'Observe collective motion from simple local rules.', difficulty: 'Intermediate', status: 'Planned', tags: ['swarm', 'agents'] },
  { id: 'cellular-automata-lab', title: 'Cellular Automata Lab', category: 'Generative Systems and Complex Systems', description: 'Run automata rules and inspect emergent structures.', difficulty: 'Intermediate', status: 'Planned', tags: ['grid', 'emergence'] },
  { id: 'strange-attractors', title: 'Strange Attractors', category: 'Generative Systems and Complex Systems', description: 'Trace nonlinear trajectories and parameter sensitivity.', difficulty: 'Advanced', status: 'Planned', tags: ['chaos', 'phase space'] },
  { id: 'fourier-epicycles', title: 'Fourier Epicycles', category: 'Generative Systems and Complex Systems', description: 'Visualize circular motion and harmonic reconstruction.', difficulty: 'Advanced', status: 'Planned', tags: ['fourier', 'harmonics'] },
  { id: 'slime-mold-simulation', title: 'Slime Mold Simulation', category: 'Generative Systems and Complex Systems', description: 'Explore pheromone-inspired path formation.', difficulty: 'Advanced', status: 'Planned', tags: ['agents', 'foraging'] },
  { id: 'wave-function-collapse', title: 'Wave Function Collapse', category: 'Generative Systems and Complex Systems', description: 'Collapse constrained tiles into a coherent pattern.', difficulty: 'Advanced', status: 'Planned', tags: ['constraint', 'tile'] },
  { id: 'genetic-tsp', title: 'Genetic TSP', category: 'Generative Systems and Complex Systems', description: 'Optimize route lengths via evolutionary search.', difficulty: 'Advanced', status: 'Planned', tags: ['genetic', 'route'] },
  { id: 'pathfinding-visualizer', title: 'Pathfinding Visualizer', category: 'Pathfinding and Reinforcement Learning', description: 'Compare BFS, Dijkstra, and A* through a maze.', difficulty: 'Intermediate', status: 'Integrating', tags: ['search', 'maze'] },
  { id: 'q-learning-maze', title: 'Q-Learning Maze', category: 'Pathfinding and Reinforcement Learning', description: 'Learn a policy in a grid environment with rewards and penalties.', difficulty: 'Advanced', status: 'Planned', tags: ['reinforcement', 'policy'] },
  { id: 'reinforcement-learning-playground', title: 'Reinforcement Learning Playground', category: 'Pathfinding and Reinforcement Learning', description: 'Observe agent actions across changing environments.', difficulty: 'Advanced', status: 'Planned', tags: ['agent', 'reward'] },
  { id: 'cart-pole-rl', title: 'Cart-Pole RL', category: 'Pathfinding and Reinforcement Learning', description: 'Balance a pole as a simple control problem.', difficulty: 'Advanced', status: 'Planned', tags: ['control', 'cart'] },
  { id: 'snake-dqn', title: 'Snake DQN', category: 'Pathfinding and Reinforcement Learning', description: 'Train or inspect a deep Q-network on a classic game.', difficulty: 'Advanced', status: 'Planned', tags: ['dqn', 'game'] },
  { id: 'neural-car-racing', title: 'Neural Car Racing', category: 'Pathfinding and Reinforcement Learning', description: 'Observe a driving agent or evolutionary controller.', difficulty: 'Advanced', status: 'Planned', tags: ['racing', 'agent'] },
  { id: 'handwritten-digit-recognition', title: 'Handwritten Digit Recognition', category: 'Computer Vision and ML', description: 'Recognize digits from sketches and inspect confidence scores.', difficulty: 'Intermediate', status: 'Planned', tags: ['vision', 'classification'] },
  { id: 'iris-classifier', title: 'Iris Classifier', category: 'Computer Vision and ML', description: 'Predict iris species from feature values.', difficulty: 'Beginner', status: 'Planned', tags: ['dataset', 'classification'] },
  { id: 'sentiment-analysis', title: 'Sentiment Analysis', category: 'Computer Vision and ML', description: 'Evaluate text sentiment and explain model limitations.', difficulty: 'Intermediate', status: 'Planned', tags: ['nlp', 'text'] },
  { id: 'object-detection', title: 'Object Detection', category: 'Computer Vision and ML', description: 'Detect objects with bounding boxes and labels.', difficulty: 'Advanced', status: 'Planned', tags: ['vision', 'boxes'] },
  { id: 'webcam-transfer-learning', title: 'Webcam Transfer Learning', category: 'Computer Vision and ML', description: 'Collect examples, train a classifier, and test live predictions.', difficulty: 'Advanced', status: 'Planned', tags: ['camera', 'transfer'] },
  { id: 'ai-draw-and-guess', title: 'AI Draw and Guess', category: 'Computer Vision and ML', description: 'Compare simple drawings with trained recognition models.', difficulty: 'Intermediate', status: 'Planned', tags: ['draw', 'recognition'] },
  { id: 'neuroevolution-sandbox', title: 'Neuroevolution Sandbox', category: 'Neural Evolution, Robot and Synthesis', description: 'Watch neural structures evolve across generations.', difficulty: 'Advanced', status: 'Planned', tags: ['evolution', 'fitness'] },
  { id: 'robot-fight-club', title: 'Robot Fight Club', category: 'Neural Evolution, Robot and Synthesis', description: 'Simulate simple policy selection and behavior comparison.', difficulty: 'Advanced', status: 'Planned', tags: ['robots', 'arena'] },
  { id: 'ai-experiment-studio', title: 'AI Experiment Studio', category: 'Neural Evolution, Robot and Synthesis', description: 'Save, compare, and revisit experiment configuration and results.', difficulty: 'Intermediate', status: 'Integrating', tags: ['workspace', 'history'] }
];

export const categories = Array.from(new Set(modules.map((m) => m.category)));
