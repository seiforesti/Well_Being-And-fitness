import { GIF } from '../../assets/gif';
import { ICON_SVG } from '../../assets/svg';
import { ITraining } from './interface';

export const TRAININGS: ITraining[] = [
  {
    id: 1,
    name: 'Biceps',
    description:
      'Adding bicep curls to your workout routine helps sculpt the upper body, shapes and tones the shoulders and biceps, and improves arm strength. When doing bicep curls, keep your knees and elbow joints loose, engage your core muscles, and keep your palms facing forward. Exhale as you lift the dumbbells and keep your back straight, shoulders back, and head up',




    icon: ICON_SVG.Bicep,
    gif: GIF.BicepsCurl,
    repeat: 0,
    pose: {
      angle: 0.75,
      landmark: {
        a: 12,
        b: 14,
        c: 16,
      },
    },
  },
  {
    id: 2,
    name: 'Back',
    description:
    'Adding back extensions to your workout routine helps strengthen the back muscles and improve posture and balance. To have a strong core, its important to work not only the abs and obliques but also the back muscles  Use your hands to support your head and remove any strain from your neck Engage your core muscles, keep your chin up, and exhale as you lift your torso. Keep the movement smooth and within a comfortable range of motion',


    icon: ICON_SVG.BodyBack,
    gif: GIF.BackExtensions,
    repeat: 0,
    pose: {
      angle: 0.7,
      landmark: {
        a: 1,
        b: 2,
        c: 3,
      },
    },
  },
  {
    id: 3,
    name: 'Glutes',
    description:
      'The band kickback targets the glutes and helps improve muscle strength and tone. This exercise also increases core stability and balance and helps sculpt the hips, legs, and thighs. Keep your back straight, toes pointed, engage your core, and keep the movement smooth and continuous. Exhale as you kick your legs back and squeeze the glutes.',

    icon: ICON_SVG.BodyButt,
    gif: GIF.BandKickback,
    repeat: 0,
    pose: {
      angle: 0.7,
      landmark: {
        a: 29,
        b: 24,
        c: 32,
      },
    },
  },

  {
    id: 4,
    name: 'Triceps',
    description:
      'Adding triceps extensions to your workout routine helps strengthen the triceps muscles and improve arm strength. When doing triceps extensions, keep your elbows close to your head, engage your core muscles, and exhale as you extend your arms. Keep the movement controlled and within a comfortable range of motion.',

  
    icon: ICON_SVG.Triceps,
    gif: GIF.triceps,
    repeat: 0,
    pose: {
      angle: 0.75,
      landmark: {
        a: 13,
        b: 15,
        c: 17,
      },
    },
  },

  {
    id:5,
    name: 'Legs',
    description:
      'Adding leg exercises to your workout routine helps strengthen the leg muscles, including the quadriceps, hamstrings, and calves, improving lower body strength and stability. When doing leg exercises, maintain proper form, engage your core muscles, and exhale as you perform each movement. Start with light weights and gradually increase the resistance as you build strength.',
    icon: ICON_SVG.legs,
    gif: GIF.legs,
    repeat: 0,
    pose: {
      angle: 0.75,
      landmark: {
        a: 18, // Landmark for quadriceps
        b: 19, // Landmark for hamstrings
        c: 20, // Landmark for calves
      },
    },
  },
  
  {
    id: 6,
    name: 'Chest',
    description:
      'Adding chest exercises to your workout routine helps strengthen the chest muscles, including the pectoralis major and minor, improving upper body strength and posture. When doing chest exercises, maintain proper form, engage your chest muscles, and exhale as you perform each movement. Start with light weights and gradually increase the resistance as you build strength.',
    icon: ICON_SVG.chest,
    gif: GIF.bench,
    repeat: 0,
    pose: {
      angle: 0.75,
      landmark: {
        a: 21, // Landmark for upper chest
        b: 22, // Landmark for center of chest
        c: 23, // Landmark for lower chest
      },
    },
  },
  {
    id: 7,
    name: 'Shoulders',
    description:
      'Adding shoulder exercises to your workout routine helps strengthen the shoulder muscles, including the deltoids, improving upper body strength and stability. When doing shoulder exercises, maintain proper form, engage your shoulder muscles, and exhale as you perform each movement. Start with light weights and gradually increase the resistance as you build strength.',
    icon: ICON_SVG.shoolder,
    gif: GIF.shoolder,
    repeat: 0,
    pose: {
      angle: 0.75,
      landmark: {
        a: 24, // Landmark for front shoulder
        b: 25, // Landmark for center of shoulder
        c: 26, // Landmark for rear shoulder
      },
    },
  }
  
];
