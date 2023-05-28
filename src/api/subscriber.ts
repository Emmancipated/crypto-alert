export default async function handler(req: any, res: any) {
  const response = await fetch('https://api.novu.co/v1/subscribers');
  const data = await response.json();
  
  res.json(data);
}