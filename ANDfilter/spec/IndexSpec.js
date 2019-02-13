
 describe('Index', () => {
   const newCandidates = [
     { name: "Kerrie", skills: ["JavaScript", "Docker", "Ruby"] },
     { name: "Mario", skills: ["Python", "AWS"] },
     { name: "Jacquline", skills: ["JavaScript", "Azure"] },
     { name: "Kathy", skills: ["JavaScript", "Java"] },
     { name: "Anna", skills: ["JavaScript", "AWS"] },
     { name: "Matt", skills: ["PHP", "AWS"] },
     { name: "Matt", skills: ["PHP", ".Net", "Docker"] },
   ];

   it('can check if new canditate has a skill', () => {
     expect(hasSkill(newCandidates[0], 'JavaScript')).toEqual(true)
   });

   it('shows candidates having JavaScript skills', () => {
     expect(filterCandidateBySkill(newCandidates, 'JavaScript')).toEqual([
       { name: "Kerrie", skills: ["JavaScript", "Docker", "Ruby"] },
       { name: "Jacquline", skills: ["JavaScript", "Azure"] },
       { name: "Kathy", skills: ["JavaScript", "Java"] },
       { name: "Anna", skills: ["JavaScript", "AWS"] },
     ]);
   });

   it('shows candidates having AWS skills', () => {
     expect(filterCandidateBySkill(newCandidates, 'AWS')).toEqual([
       { name: "Mario", skills: ["Python", "AWS"] },
       { name: "Anna", skills: ["JavaScript", "AWS"] },
       { name: "Matt", skills: ["PHP", "AWS"] },
     ]);
   });
 });
