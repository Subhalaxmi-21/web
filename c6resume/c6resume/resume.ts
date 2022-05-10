function showResume() {
    const header1 = document.createElement("H1");
    header1.textContent = 'Harshit Samir Sonawala';
    document.body.appendChild(header1);

    const horiz_rule1 = document.createElement("hr");
    document.body.appendChild(horiz_rule1);

    const header2 = document.createElement("h3");
    header2.textContent = 'Education';
    document.body.appendChild(header2);

    const horiz_rule2 = document.createElement("hr");
    document.body.appendChild(horiz_rule2);

    const para1 = document.createElement('p');
    para1.textContent = 'B Tech in Information Technology from K. J. Somaiya Institute of Engineering and Information Technology (current)';
    document.body.appendChild(para1);
    
    const para2 = document.createElement('p');
    para2.textContent = 'Diploma in Computer Engineering from Shri Bhagubhai Mafatlal Polytechnic';
    document.body.appendChild(para2);
    
    const para3 = document.createElement('p');
    para3.textContent = 'I.C.S.E. Std I - X from Chhatrabhuj Narsee Memorial School';
    document.body.appendChild(para3);

    const horiz_rule3 = document.createElement("hr");
    document.body.appendChild(horiz_rule3);

    const header3 = document.createElement("h3");
    header3.textContent = 'Technical Skills and Interests';
    document.body.appendChild(header3);

    const horiz_rule4 = document.createElement("hr");
    document.body.appendChild(horiz_rule4);

    const para4 = document.createElement('p');
    para4.textContent = 'Web and Mobile App Development using Frameworks such as Flutter, React, React Native, Angular';
    document.body.appendChild(para4);
    
    const para5 = document.createElement('p');
    para5.textContent = 'Programming Essentials with Python, Java, C, C++';
    document.body.appendChild(para5);
    
    const para6 = document.createElement('p');
    para6.textContent = 'Knowledge of Computer Hardware and Components';
    document.body.appendChild(para6);

    const para7 = document.createElement('p');
    para7.textContent = 'Fundamentals of Machine Learning, Internet of Things, Blockchain, etc.';
    document.body.appendChild(para7);
}
