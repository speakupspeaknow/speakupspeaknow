function makeid(length: number) {
  var result = ''
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export const subject = `We Need a Budget That Represents US ID(${makeid(10)})`

export interface BodyOptions {
  name: string
  city: string
}

export const makeBody = (opts: BodyOptions) =>
  `Hello, 

My name is ${opts.name}. I am a resident of ${
    opts.city
  } and I am emailing to demand the restructuring of our city budget, so as to prioritize more social services for our community, and to drastically minimize spending on Police. It is unconscionable that 1/3 to 1/2 of the city’s budget is going to the police department. 

This does not align with the values that I have as your constituent and I demand that you and other city officials work together to draft and approve a budget that diverts funds from the police department and reallocates them directly to benefit those in need. 

Defunding the police and restructuring the budget is an absolute necessity now more than ever. Police perpetuate a pattern of excessive violence and force, especially directed towards Black People and their communities. The police refuse to hold their own accountable and this is unacceptable. 

We are in the middle of a global pandemic that has killed 100,000 Americans and more than 40 million people have filed for unemployment. Healthcare workers are without proper equipment and essential workers are not being fairly compensated or protected for the great work they do. We don’t need more police, we need more social safety nets. Funds intended for police would be better off being sorted to initiatives that 

Enrich our public schools and students
Provide more affordable housing and mental health care initiatives
Protect and bolster our parks
Support small businesses struggling due to COVID-19
Provide cheaper and cleaner modes of public transportation 

Our nation is grieving the deaths of Black Americans that were murdered at the hands of police officers who have yet to be held accountable. While the police department has more funding than it knows what to do with, we have communities who desperately need funding and every day they don't receive it their quality of life worsens. Thousands have died who did not need to. You have the ability to change this, so do it. 

Email ID: ${makeid(10)}

Sincerely, 
${opts.name}`
