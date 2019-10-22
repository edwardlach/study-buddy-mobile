function Group(groupId, university, subject, startDate, endDate, deleted) {
  this.groupId = groupId,
  this.university = university,
  this.subject = subject,
  this.startDate = startDate,
  this.endDate = endDate,
  this.deleted = deleted,
  this.getGroupId = function() {
    return this.groupId;
  },
  this.getUniversity = function() {
    return this.university;
  },
  this.getSubject = function() {
    return this.subject;
  },
  this.getStartDate = function() {
    return this.startDate;
  },
  this.getEndDate = function() {
    return this.endDate;
  },
  this.getDeleted = function() {
    return this.deleted;
  }
}

export default Group;
