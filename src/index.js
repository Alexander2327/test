export default function checkHealth(obj) {
  if (obj.health > 50) {
    return 'healthy';
  }
  if (obj.health >= 15 && obj.health <= 50) {
    return 'wounded';
  }
  if (obj.health < 15) {
    return 'critical';
  }
  return 0;
}
